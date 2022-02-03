pipeline{
    agent any 

    options{
        timestamp()
        disableConcurrentBuilds()
    }
    stages{
        stage("What's-UP"){
            steps{
                sh  '''
                echo "hello"
                '''
            }
        }
    }
    post{
        cleanup{
            cleanWs()
        }
    }
}