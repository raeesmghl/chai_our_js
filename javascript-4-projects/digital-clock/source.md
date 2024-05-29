## HTML

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>click</title>
</head>
<body>
    <p>your local time</p>
    <div class="clock"></div>
</body>
</html>

```

## Javascript

```javascript
let clock = document.querySelector('.clock');
        
        setInterval(()=>{
            let newDate = new Date();
            clock.innerHTML = newDate.toLocaleTimeString();
        },1000)
```
