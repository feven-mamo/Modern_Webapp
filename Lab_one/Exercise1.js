(function () {
    let arr = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2];
    Object.defineProperty(Array.prototype, 'removeDuplicate', {
        enumerable: false,
        value: function () {
            let unique_array = this.filter(function (element, index, self) {
                return index == self.indexOf(element);
            });
            return unique_array
        }
    });
    console.log("Remove Duplicate using ES6");   
    console.log(arr.removeDuplicate());

    Object.defineProperty(Array.prototype, 'removeDuplicatesPromise', {
        enumerable: false,
        value: function () {
            return new Promise(resolve => { resolve(this.removeDuplicate()) })
        }
    });    
    console.log("Remove Duplicate using Promise");   
    console.log(arr.removeDuplicatesPromise().then(data => console.log(data)));
    
    Object.defineProperty(Array.prototype, 'removeDuplicatesAsyncWait', {
        enumerable: false,
        value: async function () {
            try {
                let unique_array = await this.removeDuplicatesPromise();               
                console.log(unique_array);
            } catch (error) {
                console.log(error);
            }
        }
    });
    console.log("Remove Duplicate using Async/Wait");
    arr.removeDuplicatesAsyncWait();   

    Object.defineProperty(Array.prototype, 'removeDuplicatesObservable', {
        enumerable: false,
        value: function () {
            const { from } = rxjs;
            const { distinct, reduce } = rxjs.operators;
            from(this)
                .pipe(
                    distinct(),
                    reduce(
                        (accumulator, currentValue) => {
                            accumulator.push(currentValue);
                            return accumulator;
                        }, []),
                )
                .subscribe(
                    data => console.log(data),
                    null,
                    () => console.log('Finish')
                )
        }
    });
    console.log("Remove Duplicate using Observable");  
    arr.removeDuplicatesObservable();
})();

