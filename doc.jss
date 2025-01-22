<!DOCTYPE html>
<html>
<body>

<h1 id="heading">My First </h1>
<p id="paragraph">My first paragraph.</p>

<script>
    // Apply styles using JavaScript
    document.getElementById("heading").style.cssText = `
        color: #333;
        text-align: center;
        font-size: 36px;
    `;

    document.getElementById("paragraph").style.cssText = `
        color: #555;
        font-size: 18px;
        line-height: 1.6;
    `;

    document.body.style.cssText = `
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 20px;
    `;
</script>

</body>
</html>
