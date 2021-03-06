"use strict";
const _ =  require("lodash");
const JsonStore = require("./json-store");


const assessmentStore = {
    store: new JsonStore('./models/assessment-store.json', { usersAssessments: [] }),
    collection: "usersAssessments",

    getAllAssessments(){
        return this.store.findAll(this.collection);
    },

    getAssessment(id){
        return this.store.findOneBy(this.collection, { id: id });
    },

    removeAssessment(id){
        const assessment = this.getAssessment(id);
        this.store.remove(this.collection, assessment);
        this.store.save();
    },

    addAssessment(assessment){
        this.store.add(this.collection, assessment);
        this.store.save();
    },

    getUserAssessments (userId){
        return this.store.findBy(this.collection, {userId: userId});
    },

    save(){
        this.store.save();
    }

};



module.exports = assessmentStore;