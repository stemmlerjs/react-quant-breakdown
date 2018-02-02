# react-quant-breakdown

A react component to visualize the quantitative breakdown of a process and it's subprocesses.

![component](https://user-images.githubusercontent.com/6892666/35712531-6c6212ac-0790-11e8-8402-2003d216d30a.PNG)

## Getting Started

```
npm install quantity-breakdown
```

## Usage

```jsx
import QuantityBreakdown from 'quantity-breakdown';

class App extends Component {
  render() {
    return (
      <div>
        <QuantityBreakdown 
          text="Daily Spend Report" 
          type="cost"
          chunks={[
            { name: 'Coffee', value: 4.23 },
            { name: 'Lunch', value: 9.32 },
            { name: 'Gas', value: 50.00 },
            { name: 'Drinks', value: 23.90 },
          ]} 
          />
      </div>
    );
  }
}

```

| Prop name | Description                                  | Type                                        | Example                                                         |
|-----------|----------------------------------------------|---------------------------------------------|-----------------------------------------------------------------|
| title     | The title of the process breakdown component | String                                      | Weekly Spending Report                                          |
| type      | Type of data to be aggregated                | String: ("cost", "time")                    | time                                                            |
| chunks    | The chunks of data to be aggregated          | Array of objects containing name and value | [{ name: 'Gas', value: 50.00 }, {name: 'Drinks', value: 32.23}] |

## Setting up a dev environment

To run the tests, we can create a link to this project to be used in dev:

```
npm i
npm run build
npm link
```

Then, in the ```tests``` folder, run:

```
npm install
npm link quantity-breakdown
npm run start
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

