function runSaveTest () {
  test("Save Test", function () {
         var r = new Rectangle();
         r.getBorderColour().set(255, 0, 0, new Opacity(1));
         r.getBounds().setStart(new Point(10, 20));
         r.getBounds().setEnd(new Point(50, 40));
         var svgValue = "<rect x=\"10\" y=\"20\" width=\"40\" height=\"20\" fill=\"#000000\" stroke=\"#ff0000\"></rect>\n";
         var s = new SVGGenerator(1000, 1000);
			s._doc = "";
         r.toSVG(s);
         equals(s._doc, svgValue, 'Rectangle');

			var e = new Circle();
			e.getBorderColour().set(255, 0, 255, new Opacity(1));
	 		e.getFillColour().set(255, 0, 0, new Opacity(1));
         e.getBounds().setStart(new Point(100, 200));
			e.getBounds().setEnd(new Point(400, 300));
         svgValue = "<ellipse cx=\"250\" cy=\"250\" rx=\"150\" ry=\"50\" fill=\"#ff0000\" stroke=\"#ff00ff\"></ellipse>\n";
			s._doc = "";
         e.toSVG(s);
         equals(s._doc, svgValue, 'Ellipse');

			var p = new Polygon();
         p.getBorderColour().set(255, 0, 0, new Opacity(1));
         p.getBounds().setStart(new Point(10, 10));
         p.getBounds().setEnd(new Point(50, 50));
			p.edgeNumber(8);
         svgValue = "<polygon fill=\"#000000\" stroke=\"#ff0000\" points=\"50,30 20.000000000000004,47.32050807568878 19.999999999999993,12.679491924311233 \"></polygon>\n";
         s = new SVGGenerator(1000, 1000);
			s._doc = "";
         p.toSVG(s);
         equals(s._doc, svgValue, 'Polygon');

       });
}
