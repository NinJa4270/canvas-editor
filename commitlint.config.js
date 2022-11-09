module.exports = {
  ignores: [commit => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [1, 'always', 108],
    'subject-empty': [1, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'init', // 初始提交
        'feat', // 一个新的功能
        'fix', // 修复一个Bug
        'perf', //提升性能
        'style', // 空格，分号等格式修复
        'docs', //变更的只有文档
        'test', //添加一个测试
        'refactor', // 重构，注意和特性，修复区分开
        'build', // 编译
        'revert', //代码回退
        'bug', // 此项特别针对bug，用于向测试反馈bug列表的bug修改情况
        'ci', // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        'del', //删除代码/文件
        'deploy', // 部署
        'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
        'chore', //不属于以上类型的其他类型(日常事务),构建过程或辅助工具的变动
      ],
    ],
  },
}
