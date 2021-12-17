module.exports = {
    apps: [
        {
            name: "iqiaoxin",
            script: "next start",
            instances: 2,
            exec_mode: "cluster",
            watch: ["dist"],
            ignore_watch: ["node_modules", "pages", "styles"],
            max_memory_restart: '300M',
            //  Sometimes you might want the application to automatically restart in case of failure 
            stop_exit_codes: [0],
            exp_backoff_restart_delay: 100,
            env: {
                "PORT": 3000,
                "NODE_ENV": "production"
            }
        },
    ],
};
