import numpy as np

def find_alternating_path(adjacency_matrix, pairing):
    num_nodes = len(adjacency_matrix)

    for i in range(num_nodes):
        if i not in pairing:
            for j in range(num_nodes):
                if j not in pairing and adjacency_matrix[i][j] == 1:
                    # Try adding edge (i, j) to the pairing
                    new_pairing = pairing.copy()
                    new_pairing[i] = j

                    # Check if the new pairing is still a valid matching
                    if is_valid_matching(adjacency_matrix, new_pairing):
                        return [i, j]  # Return the alternating path

    return None  # No alternating path found

def is_valid_matching(adjacency_matrix, pairing):
    num_nodes = len(adjacency_matrix)
    matched_nodes = set()

    for i in range(num_nodes):
        if i in pairing:
            j = pairing[i]
            if adjacency_matrix[i][j] == 1 and i not in matched_nodes and j not in matched_nodes:
                matched_nodes.add(i)
                matched_nodes.add(j)
            else:
                return False  # Invalid matching

    return True

# Example adjacency matrix
adjacency_matrix = np.array([
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
])

# Pairing edges
pairing = {0: 1, 1: 0, 2: 8, 8: 2, 3: 6, 6: 3, 4: 7, 7: 4}

alternating_path = find_alternating_path(adjacency_matrix, pairing)

if alternating_path is not None:
    print("Alternáló út található:", alternating_path)
else:
    print("Nincs alternáló út.")
