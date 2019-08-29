/**
 * BASIC EXAMPLE
 */

document.addEventListener("DOMContentLoaded", event => {
  // Settings
  let settings = {
    canvas: {
      //canvas settings
      width: 300,
      height: 300,
      padding: -15, //padding can be negative
      fill: "#ffffff" //background color
    },
    polygon: {
      color: ["#F40080", "#D9048E", "#A6038B", "#7C038C", "#570080"],
      line: {
        width: 0, //0 to remove border
        cap: "square",
        join: "round"
      },
      vertex: {
        nb: 300, //number of vertex
        distance: 3
      }
    }
  };
  console.log(settings);

  // Dessin
  const monDessin = new LcsCnvs();
  monDessin
    .setCanvas(settings.canvas)
    .drawDelaunay(settings.polygon)
    .append("body");
});
