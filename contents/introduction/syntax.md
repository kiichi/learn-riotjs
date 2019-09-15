As for syntax and naming convention, I try to stick with what RiotJS is suggesting, and it's standard in current web development scene. If you are not familiar with it, make sure bookmark this [Style Guide](https://www.w3schools.com/js/js_conventions.asp) by W3Schools.

- File, tag, and attribute are lowercase / kebab-case
```
user-profile.html
<user-profile role-title="Sr. Developer"></user-profile>
auth-service.js
```
- Variable and function are camelCase
```
const isAdmin = true;
saveUserProfile(){}
```
- Class name is UpperCamelCase
```
class AuthService {}
```

More importantly, I always recommend to ask yourself if other people can understand your naming convention or not when you are writing codes. For example, you might name a variable "var pr =...", but does this make sense to you? It could be better if you write "var userProfile = ...".