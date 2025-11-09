import { Engine } from 'tscratch';
import primary from '@/scenes/primary.ts';
import secondary from '@/scenes/secondary.ts';

const engine = Engine.init();

// Set the scene
engine.changeScene('primary');

// Set the loops
engine.setLoop('primary', primary);
engine.setLoop('secondary', secondary);