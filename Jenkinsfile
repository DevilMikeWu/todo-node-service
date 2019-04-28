pipeline{
    agent{
        docker{
             image 'node:8.16.0-alpine' 
            args '-p 3000:3000' 
        }
    }
     environment {
        HOME = '.'
    }
    stages{
        stage("Build"){
            steps{
                echo "install dependencies"
                sh 'npm install'
            }
        }

        stage("Deploy"){
            steps{
                echo "Start Nodejs Server"
                sh 'npm run serve'
            }
        }
    }
}