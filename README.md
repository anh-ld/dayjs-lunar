### dayjs().toLunar()

- parse date into lunar in `dayjs`
- algorithm by [Ho Ngoc Duc](https://www.informatik.uni-leipzig.de/~duc/amlich/calrules.html)

### Usage

- Basic
```
import dayjs from 'dayjs';
import lunar from 'dayjs-lunar';

dayjs.extend(lunar);

dayjs().toLunar().toString();
```

- For Vietnamese / Chinese calendar, requires `utc` plugin

```
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc.js";
import lunar from 'dayjs-lunar';

dayjs.extend(utc);
dayjs.extend(lunar);

// for Vietnamese calendar GMT +7
dayjs().utcOffset(7).toLunar().toString();

// for Chinese calendar GMT +7
dayjs().utcOffset(8).toLunar().toString();
```