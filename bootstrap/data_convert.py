import pandas as pd
import pprint as pp

df = pd.read_csv("sum_1_2.csv")

f=[]
t=[]
v=[]

data = {}
for  frequency, row in df.iterrows():
	if frequency != 0:
		for time, item in row.iteritems():
			# print(time,frequency,int(item))
			value = int(item)
			f.append(200-frequency)
			t.append(time)
			v.append(value)

d={}
d["time"]=t
d["frequency"]=f
d["value"]=v

df_2= pd.DataFrame(d)

df_2.to_csv("data_converted_2.csv",index=False)

print(df_2)


