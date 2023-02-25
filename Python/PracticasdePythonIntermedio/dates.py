from datetime import datetime, timedelta

date_string = "Feb 25 2020 4:20PM"

datetime_object = datetime.strptime(date_string, '%b %d %Y %I:%M%p')
print(datetime_object)

print(datetime.now().date())
print(datetime.now().time())

given_date = datetime(2020, 1, 25)

days_a_restar = 7
resultado = given_date - timedelta(days=days_a_restar)
print(resultado)