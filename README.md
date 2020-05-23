<a name="root"></a>
# osiota application console-keypress

*Osiota* is a software platform capable of running *distributed IoT applications* written in JavaScript to enable any kind of IoT tasks. See [osiota](https://github.com/osiota/osiota).

## Configuration: console-keypress


This application collects keypress events from the console.

**Properties: None**



## Configuration: console-keypress/rpc-accesskey


After a keypress event of the main application, this sub application calls rpc functions of other applications dependant on their accesskey information.

The sub application needs to be configured as child of the main application:

```json
{
    "name": "console-keypress",
    "config": {
        "app": [{
            "name": "console-keypress/rpc-accesskey",
            "config": {
            }
        }]
    }
}
```

**Properties: None**



## How to setup

Add a configuration object for this application, see [osiota configuration](https://github.com/osiota/osiota/blob/master/doc/configuration.md):

```json
{
    "name": "console-keypress",
    "config": CONFIG
}
```

## License

Osiota and this application are released under the MIT license.

Please note that this project is released with a [Contributor Code of Conduct](https://github.com/osiota/osiota/blob/master/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
