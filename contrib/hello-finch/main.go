// Copyright Amazon.com, Inc or its affiliates. All rights reserved.
package main

import (
	"fmt"
)

const hello = `
                            @@@@@@@@@@@@@@@@@@@                                 
                        @@@@@@@@@@@@    @@@@@@@@@@@                             
                      @@@@@@@                  @@@@@@@                          
                    @@@@@@                        @@@@@@                        
                  @@@@@@                            @@@@@                       
                 @@@@@                      @@@#     @@@@@@@@@                  
                @@@@@                     @@   @@@       @@@@@@@@@@             
                @@@@%                     @     @@            @@@@@@@@@@@       
                @@@@                                               @@@@@@@@     
                @@@@                                         @@@@@@@@@@@&       
                @@@@@                                  &@@@@@@@@@@@             
                 @@@@@                               @@@@@@@@                   
                  @@@@@                            @@@@@(                       
                   @@@@@@                        @@@@@@                         
                     @@@@@@@                  @@@@@@@                           
                        @@@@@@@@@@@@@@@@@@@@@@@@@@                              
                            @@@@@@@@@@@@@@@@@@`

func main() {
	fmt.Println(hello)
	fmt.Println("\n\nHello from Finch!\n")
	fmt.Println("Visit us @ github.com/runfinch\n")
}
