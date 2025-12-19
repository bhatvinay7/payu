import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'payu',
  brokers: ['kafka1:9092', 'kafka2:9092',"kafka3:9092"],
  ssl: false,
  sasl: {
    mechanism: 'plain',
    username: 'kafka-username',
    password: 'kafka-password'
}})

const producer = kafka.producer()
const consumer = kafka.consumer({ groupId: 'trasaction-consumer' })
async function run(){
  // Producing
  try{
  await producer.connect()
  await consumer.connect()
  }
  catch (error) {
    console.error('Error in producer:', error)
  }


//   await producer.send({
    // topic: 'test-topic',
    // messages: [
    //   { value: 'Hello KafkaJS user!' },
    // ],
//   })

  // Consuming
//   await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
// 
//   await consumer.run({
    // eachMessage: async ({ topic, partition, message }) => {
    //   console.log({
        // partition,
        // offset: message.offset,
        // value: message.value.toString(),
    //   })
    // },
//   })
}

run().catch(console.error)

export { producer, consumer}