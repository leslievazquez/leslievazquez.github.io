<h1 align ="center"><span>Latitude Analysis</br>Web Dashboard</span></h1>   

Often, we hear people say that the best weather conditions are found closer to the equator. But can that be proven? To answer the question, a list of 500+ cities was extrapolated on 12/01/2020 from OpenWeatherMap API using a series of successive API calls. After collecting the data, Matplotlib was used to create scatterplots to visualize the effect the distance from the equator has on the temperature (F), humidity %, cloudiness %, and wind speed (mph) of these cities.

The visualizations were used to create a web dashboard using HTML and CSS. In building this dashboard, individual pages were created for each plot with a means by which one can navigate between them. These pages contain the visualizations and their corresponding explanations. Also, there is a landing page, a page where one can see a comparison of all the plots, and another page containing the data used to create them. 

### Website Details:

The website consists of 7 pages total, including:

- A [landing page] containing:
  - An explanation of the project.
  - Links to each page containing individual visualizations.

- Four [visualization pages] each with:
  - A descriptive title and heading tag.
  - The plot/visualization itself for the selected comparison.
  - A paragraph describing the plot and its significance.

- A ["Comparisons" page] that:
  - Contains all of the visualizations on the same page so one can compare them.
  - This page uses a bootstrap grid for the visualizations.
  
- A ["Data" page] that:
  - Displays a responsive table containing the data used in the visualizations.
    -- The table uses a bootstrap table component.
    -- The data comes from exporting the .csv file as HTML, or converting it to HTML using Pandas. Pandas has a nifty method appropriately called 'to_html' that allows one to generate a HTML table from a pandas dataframe. 
