for h in $(echo $1 | sed "s/\(..\)/\1 /g"); do printf `echo "\x$h"`;done
printf '\n';
