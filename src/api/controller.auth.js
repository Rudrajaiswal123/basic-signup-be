import db from '../models/index.js';

const User = db.Users
const Vinay = db.Vinay

export const Test = async(req, res) => {
    res.send("Hello World!")
}


export const getUsers = async(req, res) => {
    try {
      const result = await User.findAll();
      return res.status(200).send({
        message:"result send",
        data : result
      }); 
    } catch (err) {
      return res.status(500).send({ error: err });
    }
  };

export const postUsers = async(req, res) => {
    try {
      const result = await User.create(req.body);
      return res.send({message : "User created",data : result});
    } catch (err) {
      return res.status(500).send({ error: err });
    }
  };

export const patchUsers =  async(req, res) => {
    try {
      const result = await User.update(req.body,{where : {id : req.body.id}});
      const resultdata =await User.findOne({where: {id : req.body.id}})
      return res.send({message : "User updated",data : resultdata});
    } catch (err) {
      return res.status(500).send({ error: err });
    }
  };

export const deleteUsers =  async(req, res) => {
  try {
    const resultdata =await User.findOne({where: {id : req.body.id}})
    if (!resultdata) {
      return res.status(404).send({ message: "User not found" });
    }
    await resultdata.destroy();
    return res.send({ message: "User deleted", data: resultdata });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};


export const postVinay = async(req, res) => {
  try {
    let data = {}
    const user = await User.findOne({where:{"id" : req.body.user_id}})
    data["user_id"] = req.body.user_id
    data["firstName"] = req.body.firstName
    data["lastName"] = req.body.lastName
    data["email"] = req.body.email
    const result = await Vinay.create(data);
    return res.send({message : "User created",data : result});
  } catch (err) {
    console.log(err)
    return res.status(500).send({ error: err });
  }
};



export const getVinay = async(req, res) => {
  try {
    const result = await User.findOne({where:{email:req.body.email}});
    if (!result) {
      return res.status(404).send({ message: "User not found" });
    }
    const resultdata = await Vinay.findAll({where:{user_id:result.id}});
    return res.status(200).send({
      message:"result send",
      data : resultdata
    }); 
  } catch (err) {
    console.log(err)
    return res.status(500).send({ error: err });
  }
};