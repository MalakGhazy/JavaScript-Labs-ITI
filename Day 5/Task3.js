function calculateRectangle()
{
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);

    const rectangle = {
        width : width,
        height : height,

        calculateArea : function(){
            return this.width * this.height;
        },

        calculatePerimeter : function(){
            return 2*(this.height + this.width);
        },

        displayInfo : function(){
            const area = this.calculateArea();
            const perimeter = this.calculatePerimeter();
            return `
             <strong>Rectangle Info:</strong><br>
            Width: ${this.width}<br>
            Height: ${this.height}<br>
            Area: ${area}<br>
            Perimeter: ${perimeter}
            `;
        },
    };

    document.getElementById("output").innerHTML = rectangle.displayInfo();

}