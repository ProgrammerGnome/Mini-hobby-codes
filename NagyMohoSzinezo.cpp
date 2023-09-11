#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Függvény a gráf színezéséhez
void graphColoring(vector<vector<int>>& graph, int numVertices) {
    vector<int> colors(numVertices, -1); // Kezdetben minden csúcsot -1-re színezünk (nincs szín)
    colors[1] = 0; // Az első csúcsot 0. színnel színezzük

    for (int i = 0; i < numVertices; i++) {
        vector<bool> availableColors(numVertices, true); // Elérhető színek (gépi) inicializálása

        // Szomszédos csúcsok színeinek megjelölése
        for (int j = 0; j < numVertices; j++) {
            if (graph[i][j]) {
                if (colors[j] != -1) {
                    availableColors[colors[j]] = false;
                }
            }
        }

        // Az első elérhető színt választása
        int chosenColor;
        for (chosenColor = 0; chosenColor < numVertices; chosenColor++) {
            if (availableColors[chosenColor]) break;
        }

        colors[i] = chosenColor; // Csúcs színezése
    }

    // Eredmények megjelenítése a képernyőn
    std::vector<int> vec;
    cout << "A kovetkezo felsorolas elkapja G egy szinezeset:" << endl;
    for (int i = 0; i < numVertices; i++) {
    	cout << "A(z) " <<  i+1 << " csucs " << colors[i] << " szinu." << endl;
    	bool exists = std::find(std::begin(vec), std::end(vec), colors[i]) != std::end(vec);
    	if (exists == false) {
    		vec.push_back(colors[i]);
    	}
    }
    cout << "----------------------------------" << endl;
    cout << "A kovetkezo szinosztalyok leteznek: ";
    for (int i = 0; i < vec.size(); i++) {
        std::cout << vec[i] << "-es, ";
    }
    cout << "\nFelso becsles a kromatikus szamra: " << vec.size() << endl;
    cout << "----------------------------------" << endl;
    cout << "A kovetkezo tablazat az oran tanultak formajaban mutatja be az algoritmust:" << endl;
    cout << "-----------------------------" << endl;
    int counter = 0;
    for (int i = 0; i < numVertices; i++) {
    	for (int k = i; k > 0; k--) {
        	std::cout << "| <- ";
        }
    	for (int j = i; j < numVertices; j++) {
        	std::cout << "|  " << colors[counter] << " ";
        }
        counter++;
        cout << endl;
    }
    cout << "-----------------------------" << endl;
}

int main() {
    int numVertices = 12; // A gráf csúcsainak számát itt adjuk meg!
    //6

    // Az adjacencia mátrixot itt inicializáljuk!
    vector<vector<int>> graph = {
    	/*
        {0, 1, 0, 1, 1, 0},
        {1, 0, 1, 0, 0, 0},
        {0, 1, 0, 1, 0, 1},
        {1, 0, 1, 0, 1, 0},
        {1, 0, 0, 1, 0, 0},
        {0, 0, 1, 0, 0, 0}
        */
        {0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1},
        {1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0},
        {1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0},
        {0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0},
        {1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0},
        {0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0},
        {1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1},
        {0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0},
        {1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1},
        {0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0},
        {1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0}
    };

    graphColoring(graph, numVertices);

    return 0;
}

