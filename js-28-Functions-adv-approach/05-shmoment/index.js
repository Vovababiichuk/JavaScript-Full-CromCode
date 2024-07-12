function shmoment(initialDate) {
  const resultDate = new Date(initialDate);

  const dateOperations = {
    add(unit, value) {
      switch (unit) {
        case "years":
          resultDate.setFullYear(resultDate.getFullYear() + value);
          break;
        case "months":
          resultDate.setMonth(resultDate.getMonth() + value);
          break;
        case "days":
          resultDate.setDate(resultDate.getDate() + value);
          break;
        case "hours":
          resultDate.setHours(resultDate.getHours() + value);
          break;
        case "minutes":
          resultDate.setMinutes(resultDate.getMinutes() + value);
          break;
        case "seconds":
          resultDate.setSeconds(resultDate.getSeconds() + value);
          break;
        case "milliseconds":
          resultDate.setMilliseconds(resultDate.getMilliseconds() + value);
          break;
        default:
          console.error("Unsupported unit:", unit);
      }
      return this;
    },
    subtract(unit, value) {
      return this.add(unit, -value);
    },
    result() {
      return new Date(resultDate);
    },
  };

  return dateOperations;
}

const initialDate = new Date(2020, 0, 7, 17, 17, 17);

const finalDate = shmoment(initialDate)
  .add("minutes", 2)
  .add("days", 8)
  .subtract("years", 1)
  .result();

console.log(finalDate); // January 15 2019 17:19:17
