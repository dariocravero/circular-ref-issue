The circular ref was as follows:

```
Store       (file-1) -> AuthService     (file-2)

AuthService (file-2) -> Store           (file-1) # << HERE!
AuthService (file-2) -> ActionCreators  (file-4)

Components  (file-3) -> Store           (file-1)
Components  (file-3) -> ActionCreators  (file-4)

Depending on how its processed, either a reference to file-4 in file-3 is an empty object or
a reference to file-4 in file-2 is an empty object.
```
