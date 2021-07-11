import requests

#server address
url = "https://dateTimeAPI.prathvirajbn.repl.co"
response = requests.get(url)
print(response.json())
