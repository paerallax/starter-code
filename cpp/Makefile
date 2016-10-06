# -*- makefile -*-

# Add all your source files here, example main.cpp
src :=
# Add the libraries that you want to link against here.
libs := -lc++
# These are some useful flags
flags := -Wall -Wextra -std=c++11 -fsanitize=address -stdlib=libc++
cc := $(shell which clang++)
# Put all the object files you will make, example foo.o
objs := main.o
# final exectuable name, add it
program_name :=

all:${objs}; ${cc} ${flags} ${objs} -o ${program_name}

%.o: %.cpp; ${cc} ${flags} -c $<

clean:;@rm -rf *.o *.out ${program_name}

.PHONY: clean
