var AnswerOfRangeType=require('../Models/answer-of-type-1');
var AnswerOfCheckType=require('../Models/answer-of-type-2');
var UserVotes=require('../Models/user-votes');
//when answer of question range
exports.answerTypeRangeUpdate=function(req,answer,data){
     var set={};   //new json object create
   //check which range value user choosen and update json object
   if(answer.vote=="answer_one")
   {
     console.log("answer_one:",data[0].answer_two);
     set={
       sequence_id: parseInt(data[0].sequence_id)+1,
       answer_one:  parseInt(data[0].answer_one)+1
     };
   }
   else if(answer.vote=="answer_two")
   {
     set={
       sequence_id: parseInt(data[0].sequence_id)+1,
       answer_two: parseInt(data[0].answer_one)+1
     };
   }
   else if(answer.vote=="answer_three")
   {
     set={
       sequence_id: parseInt(data[0].sequence_id)+1,
       answer_three: parseInt(data[0].answer_one)+1
     };
   }
   else if(answer.vote=="answer_four")
   {
     set={
       sequence_id: parseInt(data[0].sequence_id)+1,
       answer_four: parseInt(data[0].answer_one)+1
     };
   }
   else if(answer.vote=="answer_five")
   {
     set={
       sequence_id: parseInt(data[0].sequence_id)+1,
       answer_five: parseInt(data[0].answer_one)+1
     };
   }
   else if(answer.vote=="answer_six")
   {
     set={
       sequence_id: parseInt(data[0].sequence_id)+1,
       answer_six: parseInt(data[0].answer_one)+1
     };
   }
   else if(answer.vote=="answer_seven")
   {
     set={
       sequence_id: parseInt(data[0].sequence_id)+1,
       answer_seven: parseInt(data[0].answer_one)+1
     };
   }
   else if(answer.vote=="answer_eight")
   {
     set={
       sequence_id: parseInt(data[0].sequence_id)+1,
       answer_eight: parseInt(data[0].answer_one)+1
     };
   }
   else if(answer.vote=="answer_nine")
   {
     set={
       sequence_id: parseInt(data[0].sequence_id)+1,
       answer_nine: parseInt(data[0].answer_one)+1
     };
   }
   else if(answer.vote=="answer_ten")
   {
     set={
       sequence_id: parseInt(data[0].sequence_id)+1,
       answer_ten: parseInt(data[0].answer_one)+1
     };
   }
 console.log("set:",set);
 // update user vote on answerofrangetype model
  AnswerOfRangeType.update({
    $and :[
      {form_id: req.body.form_id},
      {question_id: answer.question_id},
      {address_code: req.body.pincode}
    ]
  }, {
    $set: set
  }).exec(function(err,data){
    if(!err&&data!=null)
    {
      console.log("success",data);
        //save user detail which has given vote, so it can't give again.
      UserVotes({form_id:req.body.form_id,
                 question_id:answer.question_id,
                 email:req.body.email

              }).save(function(err,data){
                if(!err&&data!=null){
                  console.log(data);

                }
              })
    }
    else {
      console.log(err);
    }
  })
}
// when answer of check type
exports.answerOfTypeCheckUpdate=function(req,answer,data)
{
  var set={}; // new json object
  // check value of checkbox type and update object
  if(answer.vote=="answer_one")
  {
    console.log("answer_one:",data[0].answer_two);
    set={
      sequence_id: parseInt(data[0].sequence_id)+1,
      answer_one:  parseInt(data[0].answer_one)+1
    };
  }
  else if(answer.vote=="answer_two")
  {
    set={
      sequence_id: parseInt(data[0].sequence_id)+1,
      answer_two: parseInt(data[0].answer_one)+1
    };
  }
  else if(answer.vote=="answer_three")
  {
    set={
      sequence_id: parseInt(data[0].sequence_id)+1,
      answer_three: parseInt(data[0].answer_one)+1
    };
  }
  else if(answer.vote=="answer_four")
  {
    set={
      sequence_id: parseInt(data[0].sequence_id)+1,
      answer_four: parseInt(data[0].answer_one)+1
    };
  }
 console.log("set:",set);
 //update user vote on answerofchecktype model
  AnswerOfCheckType.update({
    $and :[
      {form_id: req.body.form_id},
      {question_id: answer.question_id},
      {address_code: req.body.pincode}
    ]
  }, {
    $set: set
  }).exec(function(err,data){
    if(!err&&data!=null)
    {
      console.log("success",data);
        // save user detail which has given vote, so it can't give again.
       UserVotes({form_id:req.body.form_id,
                 question_id:answer.question_id,
                 email:req.body.email

              }).save(function(err,data){
                if(!err&&data!=null){
                  console.log(data);

                }
              })
        
    }
    else {
      console.log(err);
    }
  })
}
