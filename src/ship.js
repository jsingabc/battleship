let ships = (name, length, hits, sunk) => {
    return {
        name: name,
        length: length,
        hits: hits,
        sunk: sunk,
        

        setHit: function() {
            return this.hits += 1
        },

        setSunk: function(){
            if(this.length === this.hits) {
                this.sunk = true
                return sunk
            }
        },
    }
    
}

export default ships
// export  { ships }