## fancy-platform

Shortcuts for `os.platform` checks.

----
### Examples

```
import * as platform from 'fancy-platform';

if (platform.is.Windows) {
    ...
}
```

```
import * as platform from 'fancy-platform';

platform.if('Windows')
    .then(...)
    .else(...)

platform.if.not('Windows')
    .then(...)
```