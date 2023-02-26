import { connect } from 'mongoose';

export default async () => {
    const databases = {
        development:{
            uri:`${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
            options:{
                useNewUrlParser:true
            }
        },
        production:{}
    };

    console.log(databases.development.uri, 'check')

    const { uri, options } = databases[process.env.NODE_ENV];

  return connect(uri, options, (error) => {
    if (!error) console.log("MongoDB Running");
    else console.log(`MongoDB Error -> ${error}`);
  });

};