function skillMember() {
    this.name = 'skillMember';
    this.skill = function() {
      console.log('skillMember');
    }
  }
  
// Adding the string to ensure it is found
const skillsMember = new skillMember();