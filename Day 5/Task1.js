function showTypingMessage()
{
    const childWindow = window.open("","Typing Message","width=480,height=200");

    childWindow.document.write(`
         <html>
          <head>
            <title>Typing Message</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 50px;
              }
            </style>
          </head>
          <body>
            <h2>Typing...</h2>
            <p>This is a typing message. The window will close in a few seconds.</p>
          </body>
        </html>
    `);
    setTimeout(() => {
        childWindow.close();
    }, 5000); // 5000 milliseconds = 5 seconds
}