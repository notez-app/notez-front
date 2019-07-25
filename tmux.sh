SESSION=notez-front

tmux new-session -d -s $SESSION

tmux select-window -t $SESSION:0

tmux split-window
tmux send-keys 'cd packages/notez-main; clear' C-m

tmux attach -t $SESSION
