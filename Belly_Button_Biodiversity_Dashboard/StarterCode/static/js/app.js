function init() {
  
  var ul = d3.select("#selDataset");
  
  d3.json("/data/samples.json").then((data) => {
    ul.selectAll('option')
      .data(data.names)
      .enter()
      .append('option')
      .text(function (d) {
        return d;
      })
  });

  ul.on("change", function () {
    var dropDown = this.value;
    d3.json("/data/samples.json").then((data) => {
      buildMetadata(data, dropDown);
    });
  });
}

function buildGraph(sample_values, yLabel, otu_labels, otu_ids) {
  
  var trace1 = {
    x: sample_values,
    y: yLabel,
    type: "bar",
    orientation: "h",
    text: otu_labels
  };

  var trace2 = {
    x: otu_ids,
    y: sample_values,
    type: "scatter",
    marker: {
      size: sample_values,
      color: otu_ids,
      sizeref: 3
    },
    mode: 'markers',
    text: otu_labels,
  };

   var layout1 = {
    title: "Number of Belly Button OTU's",
    xaxis: {title: "OTU's"},
    yaxis: {title: "OTU ID's"},
  };

  var layout2 = {
    title: 'OTU ID',
    showlegend: false,
  };

  Plotly.newPlot("bar-plot", [trace1], layout1);
  
  Plotly.newPlot("bubble-chart", [trace2], layout2);
}

function buildMetadata(data, dropdownValue) {
  
  var metadata = data.metadata;
 
  var metaID = metadata.filter(item => item.id === parseInt(dropdownValue));

    
  d3.select("#Age")
    .html(function () {
      return `${"Age:"} ${metaID[0].age}`;
    });

  d3.select("#BBtype")
    .html(function () {
      return `${"Bbtype:"} ${metaID[0].bbtype}`;
    });

  d3.select("#Ethnicity")
    .html(function () {
      return `${"Ethnicity:"} ${metaID[0].ethnicity}`;
    });

  d3.select("#Gender")
    .html(function () {
      return `${"Gender:"} ${metaID[0].gender}`;
    });
    
  d3.select("#Location")
    .html(function () {
      return `${"Gender:"} ${metaID[0].location}`;
    });

  d3.select("#WFREQ")
    .html(function () {
      return `${"WFREQ:"} ${metaID[0].wfreq}`;
    });
  
  d3.select("#ID")
  .html(function () {
    return `${"Id:"} ${metaID[0].id}`;
  });

  var info = data.samples.filter(item => item.id === dropdownValue)
  
  var yLabel = [], otu_ids = info[0].otu_ids;;
  
  otu_ids.forEach(id => {
    yLabel.push("OTU" + id);
  });

  buildGraph(info[0].sample_values, yLabel, info[0].otu_labels, info[0].otu_ids);
}
init();