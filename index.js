const generator = require("@babel/generator")
const parser = require("@babel/parser")
const traverse = require("@babel/traverse")
const types = require("@babel/types")
function compile(code) {
    // 1. parser 字符串转为ast语法树
    const ast = parser.parse(code)
    // 2. traverse 遍历
    const visitor = {
        CallExpression(path) {
            const { callee } = path.node
            if (types.isMemberExpression(callee) && callee.object.name === 'console' && callee.property.name === 'log') {
                const funPath = path.findParent(p => {
                    return p.isFunctionDeclaration()
                })
                path.node.arguments.unshift(
                    types.stringLiteral(`[${funPath.node.id.name}]`)
                )
            }
        }
    }
    traverse.default(ast, visitor)
    // 3. generate 语法树转换为代码
    return generator.default(ast,{},code)
}
const code = `
function foo() {
    console.log('bar')
}
`
const result = compile(code)

console.log(result.code)