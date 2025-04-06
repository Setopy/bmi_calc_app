#import library
import pickle
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis

df = pd.read_csv('./data/bmi.csv')

df['Index'] = df['Index'].astype('object')

# Transform index column
df.loc[df['Index'] == 0, 'Index'] = 'Extremely Weak'
df.loc[df['Index'] == 1, 'Index'] = 'Weak'
df.loc[df['Index'] == 2, 'Index'] = 'Normal'
df.loc[df['Index'] == 3, 'Index'] = 'Overweight'
df.loc[df['Index'] == 4, 'Index'] = 'Obesity'
df.loc[df['Index'] == 5, 'Index'] = 'Extremely Obesity'


#handling categorical data
le = LabelEncoder()
df['Gender'] = le.fit_transform(df['Gender'])
df['Index'] = le.fit_transform(df['Index'])


#split data
X = df.drop('Index', axis = 1)
y = df['Index']


#fitting model
qda = QuadraticDiscriminantAnalysis()

#deploy the model
qda.fit(X, y)
pickle.dump(qda, open('./models/qda_model.pkl', 'wb'))