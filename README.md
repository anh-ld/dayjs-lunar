### dayjs().toLunar()

- parse solar date → lunar date in `dayjs`
- algorithm by [Ho Ngoc Duc](https://www.informatik.uni-leipzig.de/~duc/amlich/calrules.html)

### Installation
- Add `.npmrc`

```
@anh-ld:registry=https://npm.pkg.github.com
```

```
npm install @anh-ld/dayjs-lunar
```

### Usage

- Basic
```
import dayjs from 'dayjs';
import lunar from '@anh-ld/dayjs-lunar';

dayjs.extend(lunar);

dayjs().toLunar().toString();
```

- For Vietnamese / Chinese calendar, requires `utc` plugin

```
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc.js";
import lunar from '@anh-ld/dayjs-lunar';

dayjs.extend(utc);
dayjs.extend(lunar);

// for Vietnamese calendar, GMT +7
dayjs().utcOffset(7).toLunar().toString();

// for Chinese calendar, GMT +8
dayjs().utcOffset(8).toLunar().toString();
```

### Guide
- [https://adevait.com/software/publish-private-npm-packages-with-github-package-registry](https://adevait.com/software/publish-private-npm-packages-with-github-package-registry)