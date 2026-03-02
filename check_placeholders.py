import json
import re
import os

os.chdir('apps/frontend/src/shared/i18n/locales')

files = ['common.json', 'dialogs.json', 'errors.json', 'gitlab.json', 'navigation.json',
         'onboarding.json', 'settings.json', 'taskReview.json', 'tasks.json', 'terminal.json', 'welcome.json']

def extract_placeholders(obj, path=''):
    placeholders = {}
    if isinstance(obj, dict):
        for k, v in obj.items():
            new_path = f"{path}.{k}" if path else k
            placeholders.update(extract_placeholders(v, new_path))
    elif isinstance(obj, str):
        matches = re.findall(r'\{\{[^}]+\}\}', obj)
        if matches:
            placeholders[path] = set(matches)
    return placeholders

all_ok = True
issues = []

for file in files:
    with open(f'en/{file}') as f:
        en_placeholders = extract_placeholders(json.load(f))
    with open(f'tr/{file}') as f:
        tr_placeholders = extract_placeholders(json.load(f))

    mismatches = []
    for key, en_ph in en_placeholders.items():
        tr_ph = tr_placeholders.get(key, set())
        if en_ph != tr_ph:
            mismatches.append(f"  {key}: EN={en_ph} TR={tr_ph}")

    if mismatches:
        print(f"X {file}: Placeholder mismatches found:")
        for m in mismatches[:3]:
            print(m)
        all_ok = False
        issues.append(file)
    else:
        ph_count = len(en_placeholders)
        if ph_count > 0:
            print(f"OK {file}: All {ph_count} placeholders preserved")
        else:
            print(f"OK {file}: No placeholders")

if not all_ok:
    print(f"\nWARNING: Issues in {len(issues)} files")
else:
    print(f"\nSUCCESS: All placeholders preserved")
