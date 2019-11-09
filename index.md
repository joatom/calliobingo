## How to play
- press A+B: Toggle View
  - Drawing view: Draw and show a number out of a bag (default 25 numbers).
    - press A: draw Number
    - press B: show last drawn number
  - Board view: Show numbers already being drawn. Left upper corner = 1. Right lower corner 25.
    - press A: Page to next board page (if bag is bigger then 25 numbers). Page 1 (1-25), Page 2 (26-50) ...
    - press B: Page to preceding board page.

## Configuration
To change the amount of numbers in the bag increase the *bagsize* variable, e.g.
```js
let bagsize = 50
```
You can increase the bag size up to 100.
