from random import sample

keys = ['Ten', 'Twenty', 'Therty']
values = [10, 20, 30]
{'Ten': 10, 'Twenty': 20, 'Therty': 30}

dic = dict(zip(keys, values))
print(dic['Ten'])

dict1 = {'Ten': 10, 'Twenty': 20, 'Therty': 30}
dict2 = {'Therty': 30, 'Fourty': 40, 'Fifty': 50}
{'Ten': 10, 'Twenty': 20, 'Therty': 30, 'Fourty': 40, 'Fifty': 50}

dict3 = {**dict1, **dict2}
print(dict3)

sampleDict = {
    "class": {
        "student": {
            "name": "Mike",
            "marks": {
                "physics": 70,
                "history": 80
            }
        }
    }
}

sampleDict['class']['student']['marks']['physics']=90
sampleDict['class']['student']['name']="Rodrigo"
print(sampleDict)

employees = ['Kelly', 'Emma']
defaults = {"designation": 'Developer', "salary": 8000}
{'Kelly': {'designation': 'Developer', 'salary': 8000}, 'Emma': {'designation': 'Developer', 'salary': 8000}}
res_dict2 = dict.fromkeys(employees, defaults)
# imprimir todo el diccionario y al final solo obtener los datos de Emma
print(res_dict2)
print(res_dict2['Emma'])

sample_dict = {
    "name": "Kelly",
    "age": 25,
    "salary": 8000,
    "city": "New york"}

# Keys to extract
keys = ["name", "city"]

for k in keys:
    sample_dict.pop(k)
print(sample_dict)