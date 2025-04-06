#import library
import time
from ydata_profiling import ProfileReport
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import LinearSVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis
from xgboost import XGBClassifier
import math
from sklearn import metrics

#load dataset
df = pd.read_csv('./data/bmi.csv')

df_shape = df.shape
print('df shape : ', df_shape)

df_head = df.head()
print('df head : ', df_head)

df_description = df.describe()
print('df description : ', df_description)

df['Index'].value_counts()

df['Gender'].value_counts()

#transform index column

df['Index'] = df['Index'].astype('object')

# Transform index column
df.loc[df['Index'] == 0, 'Index'] = 'Extremely Weak'
df.loc[df['Index'] == 1, 'Index'] = 'Weak'
df.loc[df['Index'] == 2, 'Index'] = 'Normal'
df.loc[df['Index'] == 3, 'Index'] = 'Overweight'
df.loc[df['Index'] == 4, 'Index'] = 'Obesity'
df.loc[df['Index'] == 5, 'Index'] = 'Extremely Obesity'
df.head()

    
#analyze of index based on gender, height and weight
pd.pivot_table(df, index = ['Index', 'Gender'], values = ['Height', 'Weight'], 
               aggfunc = {'Height' : 'mean', 'Weight' : 'mean'}).sort_values(['Height', 'Weight'], ascending = False)



#analyze the factor of BMI
chart = df.boxplot(column = ['Height', 'Weight'])
chart.set_xticklabels(chart.get_xticklabels(), rotation = 0)
plt.title('The Factor of Body Mass Index', fontsize = 15, color = 'maroon', pad = 12)
plt.xlabel('Factors')
plt.ylabel('Count')
plt.show()



#visualize average of height based on index and gender
chart = df.groupby(['Index', 'Gender'])['Height'].mean().unstack().plot(kind = 'bar')
chart.set_xticklabels(chart.get_xticklabels(), rotation = 45)
plt.title('Average of Height based on Index and Gender', fontsize = 15, pad = 12, color = 'maroon')
plt.xlabel('Index')
plt.ylabel('Average of Height')
plt.legend(bbox_to_anchor = (1.02, 1), loc = 2, borderaxespad = 0.)
plt.show()



#visualize average of weight based on index and gender
chart = df.groupby(['Index', 'Gender'])['Weight'].mean().unstack().plot(kind = 'bar')
chart.set_xticklabels(chart.get_xticklabels(), rotation = 45)
plt.title('Average of Weight based on Index and Gender', fontsize = 15, pad = 12, color = 'maroon')
plt.xlabel('Index')
plt.ylabel('Average of Weight')
plt.legend(bbox_to_anchor = (1.02, 1), loc = 2, borderaxespad = 0.)
plt.show()

#distribution of each variable
df.hist()
plt.show()

#profile report of each variable
ProfileReport(df)


#handling categorical data
le = LabelEncoder()
df['Gender'] = le.fit_transform(df['Gender'])
df['Index'] = le.fit_transform(df['Index'])



#split data
X = df.drop('Index', axis = 1)
y = df['Index']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.3, random_state = 42)
print(X_train.shape)
print(y_train.shape)
print(X_test.shape)
print(y_test.shape)



#prepare models
classifiers = [
    KNeighborsClassifier(n_neighbors = 5),
    LinearSVC(),
    DecisionTreeClassifier(criterion = 'gini', max_depth = 3),
    RandomForestClassifier(random_state = 1, max_features = 'sqrt', n_jobs = 1, verbose = 1),
    XGBClassifier(),
    AdaBoostClassifier(),
    GaussianNB(),
    QuadraticDiscriminantAnalysis()]

#report models
log_cols = ["Classifier", "Accuracy"]
log = pd.DataFrame(columns = log_cols)

for clf in classifiers:
    clf.fit(X_train, y_train)
    name = clf.__class__.__name__
    print("=" * 30)
    print(name)
    print('****Results****')
    
    train_predictions = clf.predict(X_test)
    acc = accuracy_score(y_test, train_predictions)
    print("Accuracy: {:.4%}".format(acc))
    print("\n")
    
    log_entry = pd.DataFrame([[name, acc * 100]], columns = log_cols)
    log = pd.concat([log, log_entry], ignore_index=True)
    
print("=" * 30)


#visualize accuracy models
plt.figure(figsize = (10,6))
sns.set_color_codes("muted")
sns.barplot(x = 'Accuracy', y = 'Classifier', data = log, color = "lime")
plt.xlabel('Accuracy %')
plt.title('Accuracy Score of Classification Model')
plt.show()


#fitting model
qda = QuadraticDiscriminantAnalysis()
start_time = time.time()
qda.fit(X_train, y_train)
print(f"Time taken to fit the model: {time.time() - start_time:.2f} seconds")

#prediction
y_pred = qda.predict(X_test)
print(type(X_test))
print(X_test)
print(y_pred)

#check of MSE & RMSE 
mse = metrics.mean_squared_error(y_test, y_pred)
print('Mean Squared Error : '+ str(mse))
rmse = math.sqrt(metrics.mean_squared_error(y_test, y_pred))
print('Root Mean Squared Error : '+ str(rmse))

#confusion matrix
matrix = pd.DataFrame((metrics.confusion_matrix(y_test, y_pred)), 
                      ('Extremely Weak', 'Weak', 'Normal', 'Overweight', 'Obesity', 'Extremely Obesity'), 
                      ('Extremely Weak', 'Weak', 'Normal', 'Overweight', 'Obesity', 'Extremely Obesity'))
print(matrix)

#visualize confusion matrix
plt.figure(figsize = (8,6))
heatmap = sns.heatmap(matrix, annot = True, annot_kws = {'size': 14}, fmt = 'd', cmap = 'YlGnBu')
heatmap.yaxis.set_ticklabels(heatmap.yaxis.get_ticklabels(), rotation = 0, ha = 'right', fontsize = 14)
heatmap.xaxis.set_ticklabels(heatmap.xaxis.get_ticklabels(), rotation = 45, ha = 'right', fontsize = 14)

plt.title('Confusion Matrix\n(Quadratic Discriminant Analysis)', fontsize = 18, color = 'darkblue')
plt.ylabel('True label', fontsize = 14)
plt.xlabel('Predicted label', fontsize = 14)
plt.show()



#classification report
report = metrics.classification_report(y_test, y_pred)
print('Classification Report of Quadratic Discriminant Analysis : \n')
print(report)