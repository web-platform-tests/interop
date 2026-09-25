from pathlib import Path

import requests

dir = Path(__file__).parent

# Remove labels/*.txt.
for child in dir.iterdir():
    if child.suffix == '.txt':
        child.unlink()

# Fetch the list of all labels from wpt.fyi.
data = requests.get('https://wpt.fyi/api/metadata?includeTestLevel=true&product=chrome').json()

# Invert the data structure to a mapping from label to tests.
labels = {}
for test, links in data.items():
    for link in links:
        label = link.get('label')
        if label and label.startswith('interop-'):
            if label not in labels:
                labels[label] = []
            labels[label].append(test)

# Write one file for every label.
for label, tests in labels.items():
    tests.sort()
    filename = f'{label}.txt'
    print(f'Writing {len(tests)} tests to {filename}')
    with dir.joinpath(filename).open(mode='w') as f:
        for test in tests:
            f.write(test)
            f.write('\n')
