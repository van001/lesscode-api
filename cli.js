const {$M, Wait, lmap, FileRead, FileWrite, Print, utf8} =require('lesscode-fp')
const $R = ret => async res => ret
const dir = require('node-dir')
var mustache = require('mustache')
const fs = require('fs')
const files = [
    
    // Startup
    { from : './rest/api.yaml', to : '/rest/api.yaml' },
    { from : 'index.js', to : 'index.js' },
    { from : 'config.js', to : 'config.js' },
    { from : 'sample-readme.md', to : 'readme.md' },
    { from : 'sample.env', to : '.env' },

    // Impl
    { from : './src/functions/getHealth.js', to : '/src/functions/getHealth.js' },


    // Tests
    {from : './test/unit/index.test.js', to : '/test/unit/index.test.js'},
    {from : './test/functional/getHealth.js', to : '/test/functional/getHealth.js'},
    {from : './test/perf/perf.js', to : '/test/perf/perf.js'},
    {from : './test/config.js', to : '/test/config.js'},
    
    // CI / CD
    { from : '.gitignore', to : 'gitignore' },
    { from : 'sample-package.json', to : 'package.json' },
    { from : 'Dockerfile', to : 'Dockerfile' },
    { from : 'Dockerfile', to : 'Dockerfile' },
    { from : './.circleci/config.yml', to : '/.circleci/config.yml' },
]

const dirs = ['/rest','/src', '/.circleci','/src/functions','/test','/test/unit','/test/functional','/test/perf']


const CopyFiles = files => async config => {
    const CopyFile = config => async path => {
        const ProcessTemplate = config => data => mustache.render(data, config)
        
        
        return $M(FileWrite(utf8)(`${config.SERVICE_NAME}/${path.to}`),ProcessTemplate(config), FileRead(utf8))(path.from)
    }
    return lmap(CopyFile(config))(files)
}
const MakeDirs = async config =>{
    fs.mkdirSync(config.SERVICE_NAME)
    const CreateDir = async dir => fs.mkdirSync(`${config.SERVICE_NAME}${dir}`)
    return $M($R(config), Wait, lmap(CreateDir))(dirs)
}

const ReadInput = () =>{
    const PrintUsage = () => { Print(' Usage : api-template <service name> <prefix> <port>'); process.exit(0) }
    return ((process.argv.length < 4) ? PrintUsage() : { SERVICE_NAME : process.argv[2], PREFIX : process.argv[3], PORT : process.argv[4]})
}
$M( Wait, CopyFiles(files),MakeDirs, ReadInput)()