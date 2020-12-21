# Analysis on Kaggle Dataset about Movies

## Overview
  
  This analysis Project is performed in order to find if any specific Movie data directly affects the IMDb ratings (which was transformed into a Ratings Category column). 

  Of the original dataframe, a good variety of rows have been dropped due to preprocessing cleaning of the dataset. There have been many NaN values across the entire dataset, these are all dropped with "dropna()" to ensure everything had a processable value. 
  
  The model used in this analysis is the random forest model, because we wanted to see how accurate it is in processing and assigning back the ratings category when it comes down to the provided data. The other reason is the capabilities of weignting the provided features in terms of their importance when it comes to the target.
  
## Summary

  <img width="289" alt="Feature_importances" src="https://user-images.githubusercontent.com/68725398/102740219-4a9f5280-431d-11eb-8086-2bb9ec867a3d.png">
  
  The above average shows that 

  
