import json
from pprint import pprint;

with open('./agenda-code.json') as data_file: 
    data = json.load(data_file);


dates = data.get('days');
days = [];
tracks = [];
talks = [];
momento = 18

for date in dates:
    day = {};
    day['id'] = date.get('id');
    day['name'] = date.get('name');
    day['date'] = '2016-11-' + str(momento);
    day['tracks'] = [];
    for track in date['tracks']:
        day['tracks'].append(track.get('id'));
        sala = {};
        sala['id'] = track.get('id');
        sala['name'] = track.get('name');
        sala['slots'] = [];

        for slot in track['slots']:
            sala['slots'].append(slot.get('id'));
            charla = {};
            charla['id'] = slot.get('id');
            charla['start'] = slot.get('start');
            charla['end'] = slot.get('end');
            charla['contents'] = slot.get('contents');
            charla['userId'] = slot.get('userId');
            charla['trackId'] = slot.get('trackId');
            charla['startDate'] = '2016-11-' + str(momento) + ' ' + slot.get('start');
            charla['endDate'] = '2016-11-' + str(momento) + ' ' + slot.get('end');
            
            talks.append(charla);
        tracks.append(sala);
    days.append(day);
    momento = momento + 1;

with open('days.json', 'w') as outfile:
    json.dump(days, outfile, indent=4, sort_keys=True, separators=(',', ':'))

with open('tracks.json', 'w') as outfile:
    json.dump(tracks, outfile, indent=4, sort_keys=True, separators=(',', ':'))

with open('talks.json', 'w') as outfile:
    json.dump(talks, outfile, indent=4, sort_keys=True, separators=(',', ':'))