function sunburstCreation(sunburst_data, plot_name) {
    //console.log("###########", sunburst_data)
    // Dimensions of sunburst.
    var width = 960;
    var height = 700;
    var radius = (Math.min(width, height) / 2) ;
    var formatNumber = d3.format(",d");

    var x = d3.scale.linear().range([0, 2 * Math.PI]);
    var y = d3.scale.sqrt().range([0, radius]);

    // Mapping of step names to colors.
    //var color = d3.scaleOrdinal(d3.schemeCategory20b);
    //var colorArray = ['#6baed6', '#fd8d3c', '#74c476',  '#9e9ac8'];
    if (plot_name === "summary") {
        color = d3.scale.category10().range(['#f7fbff', '#6baed6', '#fd8d3c', '#74c476', '#9e9ac8', '#F28A30']);;
    } else {
        colorArray = ["#868686", "#b94a48", "#468847", "#3a87ad", "#f89406"];
    }

    // Total size of all segments; we set this later, after loading the data.
    var totalSize = 0;

    var partition = d3.layout.partition().value(function(d) {
        // console.log(d);
        totalSize = totalSize + d.size;
        return d.size;
    });

    var arc = d3.svg.arc()
        .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
        .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
        .innerRadius(function(d) { return Math.max(0, y(d.y)); })
        .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });

    var svg = d3.select("#chart").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

    // data comes from var "sunburst_data"
    svg.selectAll("path")
        .data(partition.nodes(sunburst_data))
        .enter().append("path")
        .attr("d", arc)
        .style("fill", d => { while (d.depth > 1) d = d.parent; return color((d.children ? d : d.parent).name); })
        .on("mouseover", mouseOverSection)
        .on("click", clickToZoom)
        .append("title")
        .text(function(d) { return d.name + "\n" + formatNumber(d.value); });

    // Mouse Leave the SVG Chart
    d3.select("#chart svg g").on("mouseleave", mouseLeaveSVG);

    function getAncestors(node) {
        var path = [];
        var current = node;
        while (current.parent) {
            path.unshift(current);
            current = current.parent;
        }
        return path;
    }

    // Restore everything to full opacity when moving off the visualization.
    function mouseLeaveSVG() {
        $("#enzymeHierachy").html("");
        $("#enzymeID").html("");

        // Deactivate all segments during transition.
        d3.selectAll("path").on("mouseover", null);

        // Transition each segment to full opacity and then reactivate it.
        d3.selectAll("path")
            .transition()
            .duration(1000)
            .style("opacity", 1)
            .each("end", function() {
                d3.select(this).on("mouseover", mouseOverSection);
            });
    }

    // Fade all but the current node, and show it in the breadcrumb trail.
    function mouseOverSection(d) {
        var percentage = (100 * d.value / totalSize).toPrecision(3);
        var count = d.value;
        var percentageString = percentage + "%";
        if (percentage < 0.1) {
            percentageString = "< 0.1%";
        }

        var sequenceArray = getAncestors(d);
        updateHierarchy(sequenceArray, count, percentageString);

        if ((plot_name === "enzyme") && (sequenceArray.length > 0)) {
            $("#enzymeID").html("Enzyme Classification ID: " + d.name);
        } else {
            $("#enzymeID").html("");
        }

        // Fade all the segments.
        d3.selectAll("path")
            .style("opacity", 0.3);
        // Then highlight only those that are an ancestor of the current segment.
        svg.selectAll("path")
            .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
            })
            .style("opacity", 1);
    }

    // Click Function - Zoom into Range
    function clickToZoom(d) {
        svg.transition()
            .duration(750)
            .tween("scale", function() {
                var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
                    yd = d3.interpolate(y.domain(), [d.y, 1]),
                    yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
                return function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); };
            })
            .selectAll("path")
            .attrTween("d", function(d) { return function() { return arc(d); }; });
    }

    // ++++++++++++++ Tools ++++++++++++++++++++++
    function checkUndefined (data) {
        return data !== undefined ? data : "--";
    }

    // ++++++++++++++ Hierarchy ++++++++++++++++++++++
    function createCategory (depth, description) {
        return "<span class='categoryHierarchy' style='background:" +  depth + "'>" + description + "</span>";
    }
   
    function updateHierarchy(nodeArray, count, percentage, depth) {

        //console.log(nodeArray);
        var enzymeString = "";

        if (nodeArray.length === 0) {
            enzymeString += "<span class='categoryHierarchy' style='background:#868686'>Total Structures</span>";
        } else {
            nodeArray.forEach(function(element) {
                 //console.log(element);
                 //console.log(checkUndefined(element.description));
                if(checkUndefined(element.description) == 'X-ray'){
                    depth = '#6baed6'
                    //console.log(checkUndefined(element.description));
                } else if(checkUndefined(element.description) == 'NMR'){
                    depth = '#fd8d3c'
                }else if(checkUndefined(element.description) == 'EM'){
                    depth = '#74c476'
                }
                else if(checkUndefined(element.description) == 'Multiple methods'){
                    depth = '#F3E96B'
                }else if(checkUndefined(element.description) == 'Neutron'){
                    depth = '#DAA2DA'
                }
                else if(checkUndefined(element.description) == 'Other'){
                    depth = '#A79C93'
                }
                enzymeString += createCategory(depth, checkUndefined(element.description));
            });
        }

        enzymeString += "<span class='categoryHierarchy' style='background:#616161'>Count: " + count + " | Percentage: " + percentage + "</span>";

        $("#enzymeHierachy").html(enzymeString);
    }
}

