import google.generativeai as genai
import os
import time

# Futtasd terminálban a használat előtt
# export GOOGLE_API_KEY="..."
# API kulcsot ingyen itt találsz: https://aistudio.google.com/app/apikey
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel(
    "gemini-1.5-pro"
)  # gemini-1.5-flash a normál gemini, de az fos, viszont gyorsabb

filePath = "..." # a manipulálni kívánt script fájl elérési útja
last_modified_time = None
last_query = ""

while True:
    try:
        current_modified_time = os.path.getmtime(filePath)

        if last_modified_time != current_modified_time:
            last_modified_time = current_modified_time

            with open(filePath, "r") as file:
                lines = file.readlines()

            selected_text = ""
            answer_line_index = None
            in_request = False

            for i, line in enumerate(lines):
                if "[A]" in line:
                    selected_text = line.replace("[A]", "").strip()
                    in_request = True
                elif in_request and "[Z]" in line:
                    selected_text += " " + line.replace("[Z]", "").strip()
                    answer_line_index = i + 1
                    in_request = False
                    break
                elif in_request:
                    selected_text += " " + line.strip()

            if selected_text and selected_text != last_query:
                response = model.generate_content(selected_text)

                if answer_line_index is not None:
                    lines.insert(answer_line_index, f"\n[VÁLASZ]:\n{response.text}\n")

                with open(filePath, "w") as file:
                    file.writelines(lines)

                last_query = selected_text

            """
                print(f"Válasz generálva: {response.text}")
            else:
                print("Nincs új kérés vagy már van válasz.")
            """

    except Exception as e:
        print(f"Hiba történt: {e}")

    time.sleep(1)
