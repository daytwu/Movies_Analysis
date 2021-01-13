## Movies_Analysis

## Communication Protocols

## Members

Dayton

Upama

## Zoom meetings
Zoom meetings are done every other day, usually 3 to 4 days a week, from 30 mins to 60 mins each. All Jupyter Notebook reviews are done on Zoom.
Any issues that arises and the proceeding problems that are troubleshooted are also done on zoom.

## Slack communications
Discussed, shared and reviewed datasets on Slack channel communications.
These are done on the days of the zoom meetings, usually followed up on before and afterwards.

## Source

[Kaggle Movie_Data](https://www.kaggle.com/ruchi798/movies-on-netflix-prime-video-hulu-and-disney)
[Reelgood Movies](https://reelgood.com/movies)

## Overview

 In this project we are provided with a dataset from Kaggle on randomly-selected-movies from IMDb which were showcased on various platforms such as Netflix, Hulu, Prime Video, and Disney. We are asked to explore the data and build a machine learning model. A linear regression model is used to show the relationship between the features and it’s impact on the IMDb ratings.  Our goal was to identify the statistically-significant features of movie ratings. 

## Goal
To determine which variable(s) had the most impact on IMDb movie ratings through a regression model. The heatmap below shows some of the statistically-significant features of movie ratings:

<img src= "https://github.com/daytwu/Movies_Analysis/blob/Upama/Resources/Heatmap.png">


## Statistically-Significant factors of IMDb Rating:
Of the original data frame, several rows have been dropped during the cleanup. There were countless null values in the entire dataset. These were dropped to maintain a good variety and ensure the dataset had processable value. We also did web scraping to fill in the missing IMDb rating data from reelgood.com.


The analysis found that each of the following had a significant an impact on the IMDb Rating:

- Runtime
- Genre
- Directors

The Regression Results below show some of the statistically-significant features of  IMDb movie ratings:

## RUNTIME:
<img src= https://github.com/daytwu/Movies_Analysis/blob/Upama/Resources/Runtime%20OLS.png>

## GENRES:
<img src= https://github.com/daytwu/Movies_Analysis/blob/Upama/Resources/Genres%20OLS.png>

## DIRECTORS:
<img src= https://github.com/daytwu/Movies_Analysis/blob/Upama/Resources/Directors%20OLS%20.png>


The following shows data plot and a linear regression model fit:

## RUNTIME:
<img src= https://github.com/daytwu/Movies_Analysis/blob/Upama/Resources/Runtime%20%26%20IMDb.png>

## GENRES:
<img src = https://github.com/daytwu/Movies_Analysis/blob/Upama/Resources/Genres%20%26%20IMDb.png>

## DIRECTORS: 
<img src = https://github.com/daytwu/Movies_Analysis/blob/Upama/Resources/Directors%20%26%20IMDb.png>



## Database
PostgreSQL has been used to merge the dataset by their importance showcasing the respective relationship with an ER Diagram. 

