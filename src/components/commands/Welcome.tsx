import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
    ___              _ __       __      __         
   /   |  __________(_) /      / /___ _/ /_  __  __
  / /| | / ___/ ___/ / /  __  / / __ \`/ __ \\/ / / /
 / ___ |(__  |__  ) / /  / /_/ / /_/ / /_/ / /_/ / 
/_/  |_/____/____/_/_/   \\____/\\__,_/_.___/\\__, /  
                                          /____/   
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ___              _ __
   /   |  __________(_) /
  / /| | / ___/ ___/ / / 
 / ___ |(__  |__  ) / /  
        /_/  |_/____/____/_/_/           
       __      __         
      / /___ _/ /_  __  __
 __  / / __ \`/ __ \\/ / / /
/ /_/ / /_/ / /_/ / /_/ / 
\\____/\\__,_/_.___/\\__, /  
                 /____/    
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Portfolio started in 23ms. (Version 1.4.1)</div>
        <Seperator>----</Seperator>
        <div>
          You can find more about what I do in my{" "}
          <Link href="https://github.com/assiljaby" target="_blank">
            GitHub
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          To change the theme, use the `<Cmd>themes</Cmd>` command. <br />
          - <br />
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`                                       
                       @@@@@@@@@                    
                     @@@@@##@@@@@@@                 
                   @@@@@@@@@#@%%%@@@                
                  @@@@@%  @@@@@@%%@@@               
                 @@@@          +@@@%@@              
                 @@* -@@@+        @@@@              
                 @  -%@. @-  @@@@ :@@@              
                 +  = -#+* =#@+. @%@@@              
                %* +:   :: %.=*@@.@@                
                #  %#%@@  .*+   -*@                 
                 + %@.  @@@@   .#@                  
                 * + **    %@@:#@                   
                  *-  #--=+- -#@                    
                  @#+: .@* .@@                      
                  . @@-  -@@@*                      
                     *@@@@%   @@@                   
                @@   ::     @@@@@@@@                
           @@@@@@@   *.:@@@@@%%%%@@@@@@             
        @@@@@%##*@@@@@@@@%%%%%%%%%%%%@@@@@@         
      @@@@##*##%#**+**#%%%%%%%%%%#%#%%%%%@@@        
     %@@#*####*#*+*#@@%%%@%%%%%#%%%%%%%%%%@@@@      
     @%.         -+=-:---::::-----==========+@@@      
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
