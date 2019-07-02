describe('login', ()=>{
    beforeEach(()=>{
        cy.visit('http://weatunes.surge.sh')
        cy.contains('Sign In').click()
    
    })
    it('should login successfully with correct credentials', ()=> {
        
        cy.get('input[name="username"]')
        .type('john@gmail.com')
            
        cy.get('input[name="password"]')
        .type('123')
            
        cy.contains('Sign In').click()

        cy.url().should('include', '/home')
    
    })
    it('should fail on inexistent user', ()=>{
        const email = 'john@g.com'
        cy.get('input[name="username"]')
        .type(email)
            
        cy.get('input[name="password"]')
        .type('123')
            
        cy.contains('Sign In').click()

        cy.get('.is-danger').invoke('text')
            .then((text)=>{
                const toastText = text;
                expect(toastText).to.equal(`user with username "${email}" does not exist`);
            })
    })
    it('should fail on incorrect password', ()=>{
        
        cy.get('input[name="username"]')
        .type('john@gmail.com')
        
        cy.get('input[name="password"]')
        .type('1234')
            
        cy.contains('Sign In').click()
    
        cy.get('.is-danger').invoke('text')
            .then((text)=>{
                const toastText = text;
                expect(toastText).to.equal(`username and/or password wrong`);
            })
    })
    it('should fail on incorrect email', ()=>{
        const email = 'john'
        cy.get('input[name="username"]')
        .type(email)
        
        cy.get('input[name="password"]')
        .type('1234')
        
        cy.contains('Sign In').click()
    
        cy.get('.is-danger').invoke('text')
            .then((text)=>{
                const toastText = text;
                expect(toastText).to.equal(`${email} is not an e-mail`);
            })
    })
    it('should fail without email', ()=>{

        cy.get('input[name="password"]')
        .type('123')
        
        cy.contains('Sign In').click()
    
        cy.get('.is-danger').invoke('text')
            .then((text)=>{
                const toastText = text;
                expect(toastText).to.equal(`email is empty`);
            })
    })
    it('should fail without password', ()=>{
        
        cy.get('input[name="username"]')
        .type('john@gmail.com')
                
        cy.contains('Sign In').click()
    
        cy.get('.is-danger').invoke('text')
            .then((text)=>{
                const toastText = text;
                expect(toastText).to.equal(`password is empty`);
            })
    })

    afterEach(()=>{
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })

    })
})