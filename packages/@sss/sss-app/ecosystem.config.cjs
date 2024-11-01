module.exports = {
  apps: [
    {
      // error: './logs/error.log',

      // instance 갯수
      instances: 2,

      log_date_format: 'YYYY-MM-DD HH:mm Z',

      // 프로젝트 변경사항 감지 시 자동 재시작
      max_memory_restart: '1G',
      name: 'app1',
      port: '3000',
      // entry point
      script: './.output/server/index.mjs'
    }
  ]
};
